import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ability_namesWhereUniqueInput } from '../ability-names/ability-names-where-unique.input';
import { Type } from 'class-transformer';
import { ability_namesCreateInput } from '../ability-names/ability-names-create.input';
import { ability_namesUpdateInput } from '../ability-names/ability-names-update.input';

@ArgsType()
export class UpsertOneabilityNamesArgs {

    @Field(() => ability_namesWhereUniqueInput, {nullable:false})
    @Type(() => ability_namesWhereUniqueInput)
    where!: ability_namesWhereUniqueInput;

    @Field(() => ability_namesCreateInput, {nullable:false})
    @Type(() => ability_namesCreateInput)
    create!: ability_namesCreateInput;

    @Field(() => ability_namesUpdateInput, {nullable:false})
    @Type(() => ability_namesUpdateInput)
    update!: ability_namesUpdateInput;
}
