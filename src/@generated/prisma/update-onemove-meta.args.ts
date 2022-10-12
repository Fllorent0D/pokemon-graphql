import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { move_metaUpdateInput } from '../move-meta/move-meta-update.input';
import { Type } from 'class-transformer';
import { move_metaWhereUniqueInput } from '../move-meta/move-meta-where-unique.input';

@ArgsType()
export class UpdateOnemoveMetaArgs {

    @Field(() => move_metaUpdateInput, {nullable:false})
    @Type(() => move_metaUpdateInput)
    data!: move_metaUpdateInput;

    @Field(() => move_metaWhereUniqueInput, {nullable:false})
    @Type(() => move_metaWhereUniqueInput)
    where!: move_metaWhereUniqueInput;
}
