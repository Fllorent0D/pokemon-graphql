import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { move_metaWhereUniqueInput } from '../move-meta/move-meta-where-unique.input';
import { Type } from 'class-transformer';
import { move_metaCreateInput } from '../move-meta/move-meta-create.input';
import { move_metaUpdateInput } from '../move-meta/move-meta-update.input';

@ArgsType()
export class UpsertOnemoveMetaArgs {

    @Field(() => move_metaWhereUniqueInput, {nullable:false})
    @Type(() => move_metaWhereUniqueInput)
    where!: move_metaWhereUniqueInput;

    @Field(() => move_metaCreateInput, {nullable:false})
    @Type(() => move_metaCreateInput)
    create!: move_metaCreateInput;

    @Field(() => move_metaUpdateInput, {nullable:false})
    @Type(() => move_metaUpdateInput)
    update!: move_metaUpdateInput;
}
