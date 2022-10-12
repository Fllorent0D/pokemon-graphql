import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesCreateWithoutPokemon_species_namesInput } from './languages-create-without-pokemon-species-names.input';
import { Type } from 'class-transformer';
import { languagesCreateOrConnectWithoutPokemon_species_namesInput } from './languages-create-or-connect-without-pokemon-species-names.input';
import { languagesWhereUniqueInput } from './languages-where-unique.input';

@InputType()
export class languagesCreateNestedOneWithoutPokemon_species_namesInput {

    @Field(() => languagesCreateWithoutPokemon_species_namesInput, {nullable:true})
    @Type(() => languagesCreateWithoutPokemon_species_namesInput)
    create?: languagesCreateWithoutPokemon_species_namesInput;

    @Field(() => languagesCreateOrConnectWithoutPokemon_species_namesInput, {nullable:true})
    @Type(() => languagesCreateOrConnectWithoutPokemon_species_namesInput)
    connectOrCreate?: languagesCreateOrConnectWithoutPokemon_species_namesInput;

    @Field(() => languagesWhereUniqueInput, {nullable:true})
    @Type(() => languagesWhereUniqueInput)
    connect?: languagesWhereUniqueInput;
}
