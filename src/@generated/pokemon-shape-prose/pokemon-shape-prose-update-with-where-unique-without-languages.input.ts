import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_shape_proseWhereUniqueInput } from './pokemon-shape-prose-where-unique.input';
import { Type } from 'class-transformer';
import { pokemon_shape_proseUpdateWithoutLanguagesInput } from './pokemon-shape-prose-update-without-languages.input';

@InputType()
export class pokemon_shape_proseUpdateWithWhereUniqueWithoutLanguagesInput {

    @Field(() => pokemon_shape_proseWhereUniqueInput, {nullable:false})
    @Type(() => pokemon_shape_proseWhereUniqueInput)
    where!: pokemon_shape_proseWhereUniqueInput;

    @Field(() => pokemon_shape_proseUpdateWithoutLanguagesInput, {nullable:false})
    @Type(() => pokemon_shape_proseUpdateWithoutLanguagesInput)
    data!: pokemon_shape_proseUpdateWithoutLanguagesInput;
}
