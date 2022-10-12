import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { abilitiesWhereUniqueInput } from './abilities-where-unique.input';
import { Type } from 'class-transformer';
import { abilitiesCreateWithoutPokemon_abilitiesInput } from './abilities-create-without-pokemon-abilities.input';

@InputType()
export class abilitiesCreateOrConnectWithoutPokemon_abilitiesInput {

    @Field(() => abilitiesWhereUniqueInput, {nullable:false})
    @Type(() => abilitiesWhereUniqueInput)
    where!: abilitiesWhereUniqueInput;

    @Field(() => abilitiesCreateWithoutPokemon_abilitiesInput, {nullable:false})
    @Type(() => abilitiesCreateWithoutPokemon_abilitiesInput)
    create!: abilitiesCreateWithoutPokemon_abilitiesInput;
}
