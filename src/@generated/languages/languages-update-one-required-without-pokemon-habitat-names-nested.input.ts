import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesCreateWithoutPokemon_habitat_namesInput } from './languages-create-without-pokemon-habitat-names.input';
import { Type } from 'class-transformer';
import { languagesCreateOrConnectWithoutPokemon_habitat_namesInput } from './languages-create-or-connect-without-pokemon-habitat-names.input';
import { languagesUpsertWithoutPokemon_habitat_namesInput } from './languages-upsert-without-pokemon-habitat-names.input';
import { languagesWhereUniqueInput } from './languages-where-unique.input';
import { languagesUpdateWithoutPokemon_habitat_namesInput } from './languages-update-without-pokemon-habitat-names.input';

@InputType()
export class languagesUpdateOneRequiredWithoutPokemon_habitat_namesNestedInput {

    @Field(() => languagesCreateWithoutPokemon_habitat_namesInput, {nullable:true})
    @Type(() => languagesCreateWithoutPokemon_habitat_namesInput)
    create?: languagesCreateWithoutPokemon_habitat_namesInput;

    @Field(() => languagesCreateOrConnectWithoutPokemon_habitat_namesInput, {nullable:true})
    @Type(() => languagesCreateOrConnectWithoutPokemon_habitat_namesInput)
    connectOrCreate?: languagesCreateOrConnectWithoutPokemon_habitat_namesInput;

    @Field(() => languagesUpsertWithoutPokemon_habitat_namesInput, {nullable:true})
    @Type(() => languagesUpsertWithoutPokemon_habitat_namesInput)
    upsert?: languagesUpsertWithoutPokemon_habitat_namesInput;

    @Field(() => languagesWhereUniqueInput, {nullable:true})
    @Type(() => languagesWhereUniqueInput)
    connect?: languagesWhereUniqueInput;

    @Field(() => languagesUpdateWithoutPokemon_habitat_namesInput, {nullable:true})
    @Type(() => languagesUpdateWithoutPokemon_habitat_namesInput)
    update?: languagesUpdateWithoutPokemon_habitat_namesInput;
}
