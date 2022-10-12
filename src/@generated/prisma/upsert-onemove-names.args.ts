import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { move_namesWhereUniqueInput } from '../move-names/move-names-where-unique.input';
import { Type } from 'class-transformer';
import { move_namesCreateInput } from '../move-names/move-names-create.input';
import { move_namesUpdateInput } from '../move-names/move-names-update.input';

@ArgsType()
export class UpsertOnemoveNamesArgs {

    @Field(() => move_namesWhereUniqueInput, {nullable:false})
    @Type(() => move_namesWhereUniqueInput)
    where!: move_namesWhereUniqueInput;

    @Field(() => move_namesCreateInput, {nullable:false})
    @Type(() => move_namesCreateInput)
    create!: move_namesCreateInput;

    @Field(() => move_namesUpdateInput, {nullable:false})
    @Type(() => move_namesUpdateInput)
    update!: move_namesUpdateInput;
}
