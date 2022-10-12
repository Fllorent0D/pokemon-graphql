import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { move_metaWhereUniqueInput } from '../move-meta/move-meta-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniquemoveMetaArgs {

    @Field(() => move_metaWhereUniqueInput, {nullable:false})
    @Type(() => move_metaWhereUniqueInput)
    where!: move_metaWhereUniqueInput;
}
