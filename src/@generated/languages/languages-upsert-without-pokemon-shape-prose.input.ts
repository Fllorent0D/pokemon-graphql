import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesUpdateWithoutPokemon_shape_proseInput } from './languages-update-without-pokemon-shape-prose.input';
import { Type } from 'class-transformer';
import { languagesCreateWithoutPokemon_shape_proseInput } from './languages-create-without-pokemon-shape-prose.input';

@InputType()
export class languagesUpsertWithoutPokemon_shape_proseInput {

    @Field(() => languagesUpdateWithoutPokemon_shape_proseInput, {nullable:false})
    @Type(() => languagesUpdateWithoutPokemon_shape_proseInput)
    update!: languagesUpdateWithoutPokemon_shape_proseInput;

    @Field(() => languagesCreateWithoutPokemon_shape_proseInput, {nullable:false})
    @Type(() => languagesCreateWithoutPokemon_shape_proseInput)
    create!: languagesCreateWithoutPokemon_shape_proseInput;
}
