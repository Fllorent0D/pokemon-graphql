import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_abilitiesWhereUniqueInput } from './pokemon-abilities-where-unique.input';
import { Type } from 'class-transformer';
import { pokemon_abilitiesUpdateWithoutAbilitiesInput } from './pokemon-abilities-update-without-abilities.input';

@InputType()
export class pokemon_abilitiesUpdateWithWhereUniqueWithoutAbilitiesInput {

    @Field(() => pokemon_abilitiesWhereUniqueInput, {nullable:false})
    @Type(() => pokemon_abilitiesWhereUniqueInput)
    where!: pokemon_abilitiesWhereUniqueInput;

    @Field(() => pokemon_abilitiesUpdateWithoutAbilitiesInput, {nullable:false})
    @Type(() => pokemon_abilitiesUpdateWithoutAbilitiesInput)
    data!: pokemon_abilitiesUpdateWithoutAbilitiesInput;
}
