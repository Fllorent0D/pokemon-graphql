import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesWhereUniqueInput } from './languages-where-unique.input';
import { Type } from 'class-transformer';
import { languagesCreateWithoutPokemon_color_namesInput } from './languages-create-without-pokemon-color-names.input';

@InputType()
export class languagesCreateOrConnectWithoutPokemon_color_namesInput {

    @Field(() => languagesWhereUniqueInput, {nullable:false})
    @Type(() => languagesWhereUniqueInput)
    where!: languagesWhereUniqueInput;

    @Field(() => languagesCreateWithoutPokemon_color_namesInput, {nullable:false})
    @Type(() => languagesCreateWithoutPokemon_color_namesInput)
    create!: languagesCreateWithoutPokemon_color_namesInput;
}
