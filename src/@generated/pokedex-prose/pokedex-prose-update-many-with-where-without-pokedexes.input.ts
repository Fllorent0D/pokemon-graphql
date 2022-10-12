import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokedex_proseScalarWhereInput } from './pokedex-prose-scalar-where.input';
import { Type } from 'class-transformer';
import { pokedex_proseUpdateManyMutationInput } from './pokedex-prose-update-many-mutation.input';

@InputType()
export class pokedex_proseUpdateManyWithWhereWithoutPokedexesInput {

    @Field(() => pokedex_proseScalarWhereInput, {nullable:false})
    @Type(() => pokedex_proseScalarWhereInput)
    where!: pokedex_proseScalarWhereInput;

    @Field(() => pokedex_proseUpdateManyMutationInput, {nullable:false})
    @Type(() => pokedex_proseUpdateManyMutationInput)
    data!: pokedex_proseUpdateManyMutationInput;
}
