import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { nature_namesWhereUniqueInput } from '../nature-names/nature-names-where-unique.input';
import { Type } from 'class-transformer';
import { nature_namesCreateInput } from '../nature-names/nature-names-create.input';
import { nature_namesUpdateInput } from '../nature-names/nature-names-update.input';

@ArgsType()
export class UpsertOnenatureNamesArgs {

    @Field(() => nature_namesWhereUniqueInput, {nullable:false})
    @Type(() => nature_namesWhereUniqueInput)
    where!: nature_namesWhereUniqueInput;

    @Field(() => nature_namesCreateInput, {nullable:false})
    @Type(() => nature_namesCreateInput)
    create!: nature_namesCreateInput;

    @Field(() => nature_namesUpdateInput, {nullable:false})
    @Type(() => nature_namesUpdateInput)
    update!: nature_namesUpdateInput;
}
