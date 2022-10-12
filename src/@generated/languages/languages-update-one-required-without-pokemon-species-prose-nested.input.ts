import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesCreateWithoutPokemon_species_proseInput } from './languages-create-without-pokemon-species-prose.input';
import { Type } from 'class-transformer';
import { languagesCreateOrConnectWithoutPokemon_species_proseInput } from './languages-create-or-connect-without-pokemon-species-prose.input';
import { languagesUpsertWithoutPokemon_species_proseInput } from './languages-upsert-without-pokemon-species-prose.input';
import { languagesWhereUniqueInput } from './languages-where-unique.input';
import { languagesUpdateWithoutPokemon_species_proseInput } from './languages-update-without-pokemon-species-prose.input';

@InputType()
export class languagesUpdateOneRequiredWithoutPokemon_species_proseNestedInput {

    @Field(() => languagesCreateWithoutPokemon_species_proseInput, {nullable:true})
    @Type(() => languagesCreateWithoutPokemon_species_proseInput)
    create?: languagesCreateWithoutPokemon_species_proseInput;

    @Field(() => languagesCreateOrConnectWithoutPokemon_species_proseInput, {nullable:true})
    @Type(() => languagesCreateOrConnectWithoutPokemon_species_proseInput)
    connectOrCreate?: languagesCreateOrConnectWithoutPokemon_species_proseInput;

    @Field(() => languagesUpsertWithoutPokemon_species_proseInput, {nullable:true})
    @Type(() => languagesUpsertWithoutPokemon_species_proseInput)
    upsert?: languagesUpsertWithoutPokemon_species_proseInput;

    @Field(() => languagesWhereUniqueInput, {nullable:true})
    @Type(() => languagesWhereUniqueInput)
    connect?: languagesWhereUniqueInput;

    @Field(() => languagesUpdateWithoutPokemon_species_proseInput, {nullable:true})
    @Type(() => languagesUpdateWithoutPokemon_species_proseInput)
    update?: languagesUpdateWithoutPokemon_species_proseInput;
}
