import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesWhereUniqueInput } from './languages-where-unique.input';
import { Type } from 'class-transformer';
import { languagesCreateWithoutPokemon_shape_proseInput } from './languages-create-without-pokemon-shape-prose.input';

@InputType()
export class languagesCreateOrConnectWithoutPokemon_shape_proseInput {

    @Field(() => languagesWhereUniqueInput, {nullable:false})
    @Type(() => languagesWhereUniqueInput)
    where!: languagesWhereUniqueInput;

    @Field(() => languagesCreateWithoutPokemon_shape_proseInput, {nullable:false})
    @Type(() => languagesCreateWithoutPokemon_shape_proseInput)
    create!: languagesCreateWithoutPokemon_shape_proseInput;
}
