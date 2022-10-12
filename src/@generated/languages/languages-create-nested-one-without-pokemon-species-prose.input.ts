import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesCreateWithoutPokemon_species_proseInput } from './languages-create-without-pokemon-species-prose.input';
import { Type } from 'class-transformer';
import { languagesCreateOrConnectWithoutPokemon_species_proseInput } from './languages-create-or-connect-without-pokemon-species-prose.input';
import { languagesWhereUniqueInput } from './languages-where-unique.input';

@InputType()
export class languagesCreateNestedOneWithoutPokemon_species_proseInput {

    @Field(() => languagesCreateWithoutPokemon_species_proseInput, {nullable:true})
    @Type(() => languagesCreateWithoutPokemon_species_proseInput)
    create?: languagesCreateWithoutPokemon_species_proseInput;

    @Field(() => languagesCreateOrConnectWithoutPokemon_species_proseInput, {nullable:true})
    @Type(() => languagesCreateOrConnectWithoutPokemon_species_proseInput)
    connectOrCreate?: languagesCreateOrConnectWithoutPokemon_species_proseInput;

    @Field(() => languagesWhereUniqueInput, {nullable:true})
    @Type(() => languagesWhereUniqueInput)
    connect?: languagesWhereUniqueInput;
}
