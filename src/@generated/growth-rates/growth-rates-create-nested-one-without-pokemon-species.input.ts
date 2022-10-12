import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { growth_ratesCreateWithoutPokemon_speciesInput } from './growth-rates-create-without-pokemon-species.input';
import { Type } from 'class-transformer';
import { growth_ratesCreateOrConnectWithoutPokemon_speciesInput } from './growth-rates-create-or-connect-without-pokemon-species.input';
import { growth_ratesWhereUniqueInput } from './growth-rates-where-unique.input';

@InputType()
export class growth_ratesCreateNestedOneWithoutPokemon_speciesInput {

    @Field(() => growth_ratesCreateWithoutPokemon_speciesInput, {nullable:true})
    @Type(() => growth_ratesCreateWithoutPokemon_speciesInput)
    create?: growth_ratesCreateWithoutPokemon_speciesInput;

    @Field(() => growth_ratesCreateOrConnectWithoutPokemon_speciesInput, {nullable:true})
    @Type(() => growth_ratesCreateOrConnectWithoutPokemon_speciesInput)
    connectOrCreate?: growth_ratesCreateOrConnectWithoutPokemon_speciesInput;

    @Field(() => growth_ratesWhereUniqueInput, {nullable:true})
    @Type(() => growth_ratesWhereUniqueInput)
    connect?: growth_ratesWhereUniqueInput;
}
