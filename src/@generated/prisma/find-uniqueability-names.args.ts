import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ability_namesWhereUniqueInput } from '../ability-names/ability-names-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueabilityNamesArgs {

    @Field(() => ability_namesWhereUniqueInput, {nullable:false})
    @Type(() => ability_namesWhereUniqueInput)
    where!: ability_namesWhereUniqueInput;
}
