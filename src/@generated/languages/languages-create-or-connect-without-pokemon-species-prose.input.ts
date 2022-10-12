import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesWhereUniqueInput } from './languages-where-unique.input';
import { Type } from 'class-transformer';
import { languagesCreateWithoutPokemon_species_proseInput } from './languages-create-without-pokemon-species-prose.input';

@InputType()
export class languagesCreateOrConnectWithoutPokemon_species_proseInput {

    @Field(() => languagesWhereUniqueInput, {nullable:false})
    @Type(() => languagesWhereUniqueInput)
    where!: languagesWhereUniqueInput;

    @Field(() => languagesCreateWithoutPokemon_species_proseInput, {nullable:false})
    @Type(() => languagesCreateWithoutPokemon_species_proseInput)
    create!: languagesCreateWithoutPokemon_species_proseInput;
}
