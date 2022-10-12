import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesUpdateWithoutPokemon_move_method_proseInput } from './languages-update-without-pokemon-move-method-prose.input';
import { Type } from 'class-transformer';
import { languagesCreateWithoutPokemon_move_method_proseInput } from './languages-create-without-pokemon-move-method-prose.input';

@InputType()
export class languagesUpsertWithoutPokemon_move_method_proseInput {

    @Field(() => languagesUpdateWithoutPokemon_move_method_proseInput, {nullable:false})
    @Type(() => languagesUpdateWithoutPokemon_move_method_proseInput)
    update!: languagesUpdateWithoutPokemon_move_method_proseInput;

    @Field(() => languagesCreateWithoutPokemon_move_method_proseInput, {nullable:false})
    @Type(() => languagesCreateWithoutPokemon_move_method_proseInput)
    create!: languagesCreateWithoutPokemon_move_method_proseInput;
}
