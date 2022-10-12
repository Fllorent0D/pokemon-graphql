import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesCreateWithoutPokemon_species_flavor_textInput } from './languages-create-without-pokemon-species-flavor-text.input';
import { Type } from 'class-transformer';
import { languagesCreateOrConnectWithoutPokemon_species_flavor_textInput } from './languages-create-or-connect-without-pokemon-species-flavor-text.input';
import { languagesUpsertWithoutPokemon_species_flavor_textInput } from './languages-upsert-without-pokemon-species-flavor-text.input';
import { languagesWhereUniqueInput } from './languages-where-unique.input';
import { languagesUpdateWithoutPokemon_species_flavor_textInput } from './languages-update-without-pokemon-species-flavor-text.input';

@InputType()
export class languagesUpdateOneRequiredWithoutPokemon_species_flavor_textNestedInput {

    @Field(() => languagesCreateWithoutPokemon_species_flavor_textInput, {nullable:true})
    @Type(() => languagesCreateWithoutPokemon_species_flavor_textInput)
    create?: languagesCreateWithoutPokemon_species_flavor_textInput;

    @Field(() => languagesCreateOrConnectWithoutPokemon_species_flavor_textInput, {nullable:true})
    @Type(() => languagesCreateOrConnectWithoutPokemon_species_flavor_textInput)
    connectOrCreate?: languagesCreateOrConnectWithoutPokemon_species_flavor_textInput;

    @Field(() => languagesUpsertWithoutPokemon_species_flavor_textInput, {nullable:true})
    @Type(() => languagesUpsertWithoutPokemon_species_flavor_textInput)
    upsert?: languagesUpsertWithoutPokemon_species_flavor_textInput;

    @Field(() => languagesWhereUniqueInput, {nullable:true})
    @Type(() => languagesWhereUniqueInput)
    connect?: languagesWhereUniqueInput;

    @Field(() => languagesUpdateWithoutPokemon_species_flavor_textInput, {nullable:true})
    @Type(() => languagesUpdateWithoutPokemon_species_flavor_textInput)
    update?: languagesUpdateWithoutPokemon_species_flavor_textInput;
}
