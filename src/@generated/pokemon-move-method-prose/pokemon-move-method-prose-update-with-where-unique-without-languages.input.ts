import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_move_method_proseWhereUniqueInput } from './pokemon-move-method-prose-where-unique.input';
import { Type } from 'class-transformer';
import { pokemon_move_method_proseUpdateWithoutLanguagesInput } from './pokemon-move-method-prose-update-without-languages.input';

@InputType()
export class pokemon_move_method_proseUpdateWithWhereUniqueWithoutLanguagesInput {

    @Field(() => pokemon_move_method_proseWhereUniqueInput, {nullable:false})
    @Type(() => pokemon_move_method_proseWhereUniqueInput)
    where!: pokemon_move_method_proseWhereUniqueInput;

    @Field(() => pokemon_move_method_proseUpdateWithoutLanguagesInput, {nullable:false})
    @Type(() => pokemon_move_method_proseUpdateWithoutLanguagesInput)
    data!: pokemon_move_method_proseUpdateWithoutLanguagesInput;
}
