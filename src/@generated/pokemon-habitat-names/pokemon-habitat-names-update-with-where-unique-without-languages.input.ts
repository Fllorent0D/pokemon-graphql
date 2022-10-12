import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_habitat_namesWhereUniqueInput } from './pokemon-habitat-names-where-unique.input';
import { Type } from 'class-transformer';
import { pokemon_habitat_namesUpdateWithoutLanguagesInput } from './pokemon-habitat-names-update-without-languages.input';

@InputType()
export class pokemon_habitat_namesUpdateWithWhereUniqueWithoutLanguagesInput {

    @Field(() => pokemon_habitat_namesWhereUniqueInput, {nullable:false})
    @Type(() => pokemon_habitat_namesWhereUniqueInput)
    where!: pokemon_habitat_namesWhereUniqueInput;

    @Field(() => pokemon_habitat_namesUpdateWithoutLanguagesInput, {nullable:false})
    @Type(() => pokemon_habitat_namesUpdateWithoutLanguagesInput)
    data!: pokemon_habitat_namesUpdateWithoutLanguagesInput;
}
