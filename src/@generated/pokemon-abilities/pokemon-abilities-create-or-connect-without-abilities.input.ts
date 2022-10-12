import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_abilitiesWhereUniqueInput } from './pokemon-abilities-where-unique.input';
import { Type } from 'class-transformer';
import { pokemon_abilitiesCreateWithoutAbilitiesInput } from './pokemon-abilities-create-without-abilities.input';

@InputType()
export class pokemon_abilitiesCreateOrConnectWithoutAbilitiesInput {

    @Field(() => pokemon_abilitiesWhereUniqueInput, {nullable:false})
    @Type(() => pokemon_abilitiesWhereUniqueInput)
    where!: pokemon_abilitiesWhereUniqueInput;

    @Field(() => pokemon_abilitiesCreateWithoutAbilitiesInput, {nullable:false})
    @Type(() => pokemon_abilitiesCreateWithoutAbilitiesInput)
    create!: pokemon_abilitiesCreateWithoutAbilitiesInput;
}
