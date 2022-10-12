import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesWhereUniqueInput } from './languages-where-unique.input';
import { Type } from 'class-transformer';
import { languagesCreateWithoutPokemon_move_method_proseInput } from './languages-create-without-pokemon-move-method-prose.input';

@InputType()
export class languagesCreateOrConnectWithoutPokemon_move_method_proseInput {

    @Field(() => languagesWhereUniqueInput, {nullable:false})
    @Type(() => languagesWhereUniqueInput)
    where!: languagesWhereUniqueInput;

    @Field(() => languagesCreateWithoutPokemon_move_method_proseInput, {nullable:false})
    @Type(() => languagesCreateWithoutPokemon_move_method_proseInput)
    create!: languagesCreateWithoutPokemon_move_method_proseInput;
}
