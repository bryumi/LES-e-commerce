import { useState } from 'react';
import Image from 'next/image';
import {
    FormContainer,
    RowContainer,
    RowImage,
    InputDataContainer,
    TitleContent,
} from './styles';
import InputText from '../InputText/InputText';

interface BookForm {
    title: string;
    author: string;
    category: string;
    year: string;
    publisher: string;
    edition: string;
    isbn: string;
    pages: number;
    synopsis: string;
    dimensions: {
        height: string;
        width: string;
        weight: string;
        depth: string;
    };
    priceGroup: string;
    barcode: string;
    imageUrl?: string;
}

interface Props {
    onSuccess: () => void;
}

export default function RegisterBookComponent() {
    const [form, setForm] = useState<BookForm>({
        title: '',
        author: '',
        category: '',
        year: '',
        publisher: '',
        edition: '',
        isbn: '',
        pages: 0,
        synopsis: '',
        dimensions: { height: '', width: '', weight: '', depth: '' },
        priceGroup: '',
        barcode: '',
        imageUrl: '',
    });

    function handleChange(
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) {
        const { name, value, files } = e.target as any;

        if (name === 'image' && files?.length > 0) {
            setForm(prev => ({ ...prev, image: files[0] }));
        } else if (name === 'imageUrl') {
            setForm(prev => ({ ...prev, imageUrl: value }));
        } else if (name in form.dimensions) {
            setForm(prev => ({
                ...prev,
                dimensions: { ...prev.dimensions, [name]: value },
            }));
        } else {
            setForm(prev => ({ ...prev, [name]: value }));
        }
    }

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        console.log('Livro cadastrado:', form);
    }

    return (
        <FormContainer onSubmit={handleSubmit}>
            <h4>Cadastrar Livro</h4>
            <InputDataContainer>
                <h4>Dados gerais</h4>
                <RowImage>
                    <InputText
                        label="Título"
                        name="title"
                        placeholder="Digite o título do livro"
                        value={form.title}
                        onChange={handleChange}
                        required
                    />
                </RowImage>

                <RowImage>
                    <InputText
                        label="Autor"
                        placeholder="Digite o nome do autor"
                        name="author"
                        value={form.author}
                        onChange={handleChange}
                        required
                    />
                </RowImage>

                <RowContainer>
                    <RowImage>
                        <InputText
                            label="Categoria"
                            name="category"
                            placeholder="Digite a categoria do livro"
                            value={form.category}
                            onChange={handleChange}
                            required
                        />
                    </RowImage>
                    <RowImage>
                        <InputText
                            label="Ano"
                            placeholder="Digite o ano de publicação"
                            name="year"
                            value={form.year}
                            onChange={handleChange}
                            required
                        />
                    </RowImage>
                </RowContainer>

                <RowContainer>
                    <RowImage>
                        <InputText
                            label="Editora"
                            placeholder="Digite o nome da editora"
                            name="publisher"
                            value={form.publisher}
                            onChange={handleChange}
                            required
                        />
                    </RowImage>
                    <RowImage>
                        <InputText
                            label="Edição"
                            placeholder="Digite a edição do livro"
                            name="edition"
                            value={form.edition}
                            onChange={handleChange}
                            required
                        />
                    </RowImage>
                </RowContainer>

                <RowImage>
                    <InputText
                        label="ISBN"
                        placeholder="Digite o ISBN do livro"
                        name="isbn"
                        value={form.isbn}
                        onChange={handleChange}
                    />
                </RowImage>

                <RowImage>
                    <InputText
                        label="Número de páginas"
                        placeholder="Digite o número de páginas"
                        name="pages"
                        type="number"
                        value={form.pages.toString()}
                        onChange={handleChange}
                    />
                </RowImage>

                <RowImage>
                    <InputText
                        label="Sinopse"
                        placeholder="Digite a sinopse do livro"
                        name="synopsis"
                        value={form.synopsis}
                        onChange={handleChange}
                    />
                </RowImage>

                <h4>Dimensões</h4>
                <RowContainer>
                    <RowImage>
                        <InputText
                            label="Altura"
                            placeholder="Digite a altura do livro"
                            name="height"
                            value={form.dimensions.height}
                            onChange={handleChange}
                        />
                    </RowImage>
                    <RowImage>
                        <InputText
                            label="Largura"
                            placeholder="Digite a largura do livro"
                            name="width"
                            value={form.dimensions.width}
                            onChange={handleChange}
                        />
                    </RowImage>
                    <RowImage>
                        <InputText
                            label="Peso"
                            placeholder="Digite o peso do livro"
                            name="weight"
                            value={form.dimensions.weight}
                            onChange={handleChange}
                        />
                    </RowImage>
                    <RowImage>
                        <InputText
                            label="Profundidade"
                            placeholder="Digite a profundidade do livro"
                            name="depth"
                            value={form.dimensions.depth}
                            onChange={handleChange}
                        />
                    </RowImage>
                </RowContainer>

                <RowImage>
                    <InputText
                        label="Grupo de precificação"
                        placeholder="Digite o grupo de precificação"
                        name="priceGroup"
                        value={form.priceGroup}
                        onChange={handleChange}
                    />
                </RowImage>

                <RowImage>
                    <InputText
                        label="Código de barras"
                        placeholder="Digite o código de barras"
                        name="barcode"
                        value={form.barcode}
                        onChange={handleChange}
                    />
                </RowImage>

                <h4>Imagem do Livro</h4>
                <RowImage>
                    <InputText
                        label="Imagem do Livro"
                        placeholder="Selecione a imagem do livro"
                        name="imageUrl"
                        value={form.imageUrl}
                        onChange={handleChange}
                    />
                    {form.imageUrl && form.imageUrl.startsWith('http') && (
                        <div style={{ marginTop: '1rem' }}>
                            <Image
                                src={form.imageUrl}
                                alt="Preview do livro"
                                width={150}
                                height={200}
                                style={{
                                    borderRadius: '4px',
                                    objectFit: 'cover',
                                }}
                            />
                        </div>
                    )}
                </RowImage>
            </InputDataContainer>
        </FormContainer>
    );
}
