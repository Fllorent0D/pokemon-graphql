import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokedex_proseCreateInput } from '../pokedex-prose/pokedex-prose-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnepokedexProseArgs {

    @Field(() => pokedex_proseCreateInput, {nullable:false})
    @Type(() => pokedex_proseCreateInput)
    data!: pokedex_proseCreateInput;
}
