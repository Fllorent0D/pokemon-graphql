import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { movesWhereUniqueInput } from './moves-where-unique.input';
import { Type } from 'class-transformer';
import { movesUpdateWithoutMove_metaInput } from './moves-update-without-move-meta.input';

@InputType()
export class movesUpdateOneRequiredWithoutMove_metaNestedInput {

    @Field(() => movesWhereUniqueInput, {nullable:true})
    @Type(() => movesWhereUniqueInput)
    connect?: movesWhereUniqueInput;

    @Field(() => movesUpdateWithoutMove_metaInput, {nullable:true})
    @Type(() => movesUpdateWithoutMove_metaInput)
    update?: movesUpdateWithoutMove_metaInput;
}
