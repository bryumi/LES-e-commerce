import LoadingIcon from './LoadingIcon';
import { LoadingWrapper } from './styles';

const Loading = ({ description }: { description: string }) => {
    return (
        <LoadingWrapper>
            <LoadingIcon />
            {description && <span>{description}</span>}
        </LoadingWrapper>
    );
};

export default Loading;
