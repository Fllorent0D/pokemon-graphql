import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesCreateWithoutPokemon_species_flavor_textInput } from './languages-create-without-pokemon-species-flavor-text.input';
import { Type } from 'class-transformer';
import { languagesCreateOrConnectWithoutPokemon_species_flavor_textInput } from './languages-create-or-connect-without-pokemon-species-flavor-text.input';
import { languagesWhereUniqueInput } from './languages-where-unique.input';

@InputType()
export class languagesCreateNestedOneWithoutPokemon_species_flavor_textInput {

    @Field(() => languagesCreateWithoutPokemon_species_flavor_textInput, {nullable:true})
    @Type(() => languagesCreateWithoutPokemon_species_flavor_textInput)
    create?: languagesCreateWithoutPokemon_species_flavor_textInput;

    @Field(() => languagesCreateOrConnectWithoutPokemon_species_flavor_textInput, {nullable:true})
    @Type(() => languagesCreateOrConnectWithoutPokemon_species_flavor_textInput)
    connectOrCreate?: languagesCreateOrConnectWithoutPokemon_species_flavor_textInput;

    @Field(() => languagesWhereUniqueInput, {nullable:true})
    @Type(() => languagesWhereUniqueInput)
    connect?: languagesWhereUniqueInput;
}
