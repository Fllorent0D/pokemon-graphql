import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_shape_proseWhereUniqueInput } from './pokemon-shape-prose-where-unique.input';
import { Type } from 'class-transformer';
import { pokemon_shape_proseCreateWithoutLanguagesInput } from './pokemon-shape-prose-create-without-languages.input';

@InputType()
export class pokemon_shape_proseCreateOrConnectWithoutLanguagesInput {

    @Field(() => pokemon_shape_proseWhereUniqueInput, {nullable:false})
    @Type(() => pokemon_shape_proseWhereUniqueInput)
    where!: pokemon_shape_proseWhereUniqueInput;

    @Field(() => pokemon_shape_proseCreateWithoutLanguagesInput, {nullable:false})
    @Type(() => pokemon_shape_proseCreateWithoutLanguagesInput)
    create!: pokemon_shape_proseCreateWithoutLanguagesInput;
}
