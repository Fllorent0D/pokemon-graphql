import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ability_namesUpdateInput } from '../ability-names/ability-names-update.input';
import { Type } from 'class-transformer';
import { ability_namesWhereUniqueInput } from '../ability-names/ability-names-where-unique.input';

@ArgsType()
export class UpdateOneabilityNamesArgs {

    @Field(() => ability_namesUpdateInput, {nullable:false})
    @Type(() => ability_namesUpdateInput)
    data!: ability_namesUpdateInput;

    @Field(() => ability_namesWhereUniqueInput, {nullable:false})
    @Type(() => ability_namesWhereUniqueInput)
    where!: ability_namesWhereUniqueInput;
}
