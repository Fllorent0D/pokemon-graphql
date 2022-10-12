import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokedex_proseUpdateManyMutationInput } from '../pokedex-prose/pokedex-prose-update-many-mutation.input';
import { Type } from 'class-transformer';
import { pokedex_proseWhereInput } from '../pokedex-prose/pokedex-prose-where.input';

@ArgsType()
export class UpdateManypokedexProseArgs {

    @Field(() => pokedex_proseUpdateManyMutationInput, {nullable:false})
    @Type(() => pokedex_proseUpdateManyMutationInput)
    data!: pokedex_proseUpdateManyMutationInput;

    @Field(() => pokedex_proseWhereInput, {nullable:true})
    @Type(() => pokedex_proseWhereInput)
    where?: pokedex_proseWhereInput;
}
