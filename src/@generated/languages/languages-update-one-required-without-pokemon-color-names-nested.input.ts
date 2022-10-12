import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesCreateWithoutPokemon_color_namesInput } from './languages-create-without-pokemon-color-names.input';
import { Type } from 'class-transformer';
import { languagesCreateOrConnectWithoutPokemon_color_namesInput } from './languages-create-or-connect-without-pokemon-color-names.input';
import { languagesUpsertWithoutPokemon_color_namesInput } from './languages-upsert-without-pokemon-color-names.input';
import { languagesWhereUniqueInput } from './languages-where-unique.input';
import { languagesUpdateWithoutPokemon_color_namesInput } from './languages-update-without-pokemon-color-names.input';

@InputType()
export class languagesUpdateOneRequiredWithoutPokemon_color_namesNestedInput {

    @Field(() => languagesCreateWithoutPokemon_color_namesInput, {nullable:true})
    @Type(() => languagesCreateWithoutPokemon_color_namesInput)
    create?: languagesCreateWithoutPokemon_color_namesInput;

    @Field(() => languagesCreateOrConnectWithoutPokemon_color_namesInput, {nullable:true})
    @Type(() => languagesCreateOrConnectWithoutPokemon_color_namesInput)
    connectOrCreate?: languagesCreateOrConnectWithoutPokemon_color_namesInput;

    @Field(() => languagesUpsertWithoutPokemon_color_namesInput, {nullable:true})
    @Type(() => languagesUpsertWithoutPokemon_color_namesInput)
    upsert?: languagesUpsertWithoutPokemon_color_namesInput;

    @Field(() => languagesWhereUniqueInput, {nullable:true})
    @Type(() => languagesWhereUniqueInput)
    connect?: languagesWhereUniqueInput;

    @Field(() => languagesUpdateWithoutPokemon_color_namesInput, {nullable:true})
    @Type(() => languagesUpdateWithoutPokemon_color_namesInput)
    update?: languagesUpdateWithoutPokemon_color_namesInput;
}
