import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_habitat_namesWhereUniqueInput } from './pokemon-habitat-names-where-unique.input';
import { Type } from 'class-transformer';
import { pokemon_habitat_namesUpdateWithoutLanguagesInput } from './pokemon-habitat-names-update-without-languages.input';
import { pokemon_habitat_namesCreateWithoutLanguagesInput } from './pokemon-habitat-names-create-without-languages.input';

@InputType()
export class pokemon_habitat_namesUpsertWithWhereUniqueWithoutLanguagesInput {

    @Field(() => pokemon_habitat_namesWhereUniqueInput, {nullable:false})
    @Type(() => pokemon_habitat_namesWhereUniqueInput)
    where!: pokemon_habitat_namesWhereUniqueInput;

    @Field(() => pokemon_habitat_namesUpdateWithoutLanguagesInput, {nullable:false})
    @Type(() => pokemon_habitat_namesUpdateWithoutLanguagesInput)
    update!: pokemon_habitat_namesUpdateWithoutLanguagesInput;

    @Field(() => pokemon_habitat_namesCreateWithoutLanguagesInput, {nullable:false})
    @Type(() => pokemon_habitat_namesCreateWithoutLanguagesInput)
    create!: pokemon_habitat_namesCreateWithoutLanguagesInput;
}
