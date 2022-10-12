import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class pokemon_move_methodsCreateWithoutPokemon_move_method_proseInput {

    @Field(() => String, {nullable:false})
    identifier!: string;
}
