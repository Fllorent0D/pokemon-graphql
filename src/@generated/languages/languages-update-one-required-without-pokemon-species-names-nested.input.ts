import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesCreateWithoutPokemon_species_namesInput } from './languages-create-without-pokemon-species-names.input';
import { Type } from 'class-transformer';
import { languagesCreateOrConnectWithoutPokemon_species_namesInput } from './languages-create-or-connect-without-pokemon-species-names.input';
import { languagesUpsertWithoutPokemon_species_namesInput } from './languages-upsert-without-pokemon-species-names.input';
import { languagesWhereUniqueInput } from './languages-where-unique.input';
import { languagesUpdateWithoutPokemon_species_namesInput } from './languages-update-without-pokemon-species-names.input';

@InputType()
export class languagesUpdateOneRequiredWithoutPokemon_species_namesNestedInput {

    @Field(() => languagesCreateWithoutPokemon_species_namesInput, {nullable:true})
    @Type(() => languagesCreateWithoutPokemon_species_namesInput)
    create?: languagesCreateWithoutPokemon_species_namesInput;

    @Field(() => languagesCreateOrConnectWithoutPokemon_species_namesInput, {nullable:true})
    @Type(() => languagesCreateOrConnectWithoutPokemon_species_namesInput)
    connectOrCreate?: languagesCreateOrConnectWithoutPokemon_species_namesInput;

    @Field(() => languagesUpsertWithoutPokemon_species_namesInput, {nullable:true})
    @Type(() => languagesUpsertWithoutPokemon_species_namesInput)
    upsert?: languagesUpsertWithoutPokemon_species_namesInput;

    @Field(() => languagesWhereUniqueInput, {nullable:true})
    @Type(() => languagesWhereUniqueInput)
    connect?: languagesWhereUniqueInput;

    @Field(() => languagesUpdateWithoutPokemon_species_namesInput, {nullable:true})
    @Type(() => languagesUpdateWithoutPokemon_species_namesInput)
    update?: languagesUpdateWithoutPokemon_species_namesInput;
}
