import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { growth_ratesCreateWithoutPokemon_speciesInput } from './growth-rates-create-without-pokemon-species.input';
import { Type } from 'class-transformer';
import { growth_ratesCreateOrConnectWithoutPokemon_speciesInput } from './growth-rates-create-or-connect-without-pokemon-species.input';
import { growth_ratesUpsertWithoutPokemon_speciesInput } from './growth-rates-upsert-without-pokemon-species.input';
import { growth_ratesWhereUniqueInput } from './growth-rates-where-unique.input';
import { growth_ratesUpdateWithoutPokemon_speciesInput } from './growth-rates-update-without-pokemon-species.input';

@InputType()
export class growth_ratesUpdateOneRequiredWithoutPokemon_speciesNestedInput {

    @Field(() => growth_ratesCreateWithoutPokemon_speciesInput, {nullable:true})
    @Type(() => growth_ratesCreateWithoutPokemon_speciesInput)
    create?: growth_ratesCreateWithoutPokemon_speciesInput;

    @Field(() => growth_ratesCreateOrConnectWithoutPokemon_speciesInput, {nullable:true})
    @Type(() => growth_ratesCreateOrConnectWithoutPokemon_speciesInput)
    connectOrCreate?: growth_ratesCreateOrConnectWithoutPokemon_speciesInput;

    @Field(() => growth_ratesUpsertWithoutPokemon_speciesInput, {nullable:true})
    @Type(() => growth_ratesUpsertWithoutPokemon_speciesInput)
    upsert?: growth_ratesUpsertWithoutPokemon_speciesInput;

    @Field(() => growth_ratesWhereUniqueInput, {nullable:true})
    @Type(() => growth_ratesWhereUniqueInput)
    connect?: growth_ratesWhereUniqueInput;

    @Field(() => growth_ratesUpdateWithoutPokemon_speciesInput, {nullable:true})
    @Type(() => growth_ratesUpdateWithoutPokemon_speciesInput)
    update?: growth_ratesUpdateWithoutPokemon_speciesInput;
}
