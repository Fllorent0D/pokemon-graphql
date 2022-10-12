import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_move_method_proseWhereUniqueInput } from './pokemon-move-method-prose-where-unique.input';
import { Type } from 'class-transformer';
import { pokemon_move_method_proseCreateWithoutLanguagesInput } from './pokemon-move-method-prose-create-without-languages.input';

@InputType()
export class pokemon_move_method_proseCreateOrConnectWithoutLanguagesInput {

    @Field(() => pokemon_move_method_proseWhereUniqueInput, {nullable:false})
    @Type(() => pokemon_move_method_proseWhereUniqueInput)
    where!: pokemon_move_method_proseWhereUniqueInput;

    @Field(() => pokemon_move_method_proseCreateWithoutLanguagesInput, {nullable:false})
    @Type(() => pokemon_move_method_proseCreateWithoutLanguagesInput)
    create!: pokemon_move_method_proseCreateWithoutLanguagesInput;
}
