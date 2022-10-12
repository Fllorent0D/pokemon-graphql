import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_move_method_proseCreateWithoutLanguagesInput } from './pokemon-move-method-prose-create-without-languages.input';
import { Type } from 'class-transformer';
import { pokemon_move_method_proseCreateOrConnectWithoutLanguagesInput } from './pokemon-move-method-prose-create-or-connect-without-languages.input';
import { pokemon_move_method_proseWhereUniqueInput } from './pokemon-move-method-prose-where-unique.input';

@InputType()
export class pokemon_move_method_proseUncheckedCreateNestedManyWithoutLanguagesInput {

    @Field(() => [pokemon_move_method_proseCreateWithoutLanguagesInput], {nullable:true})
    @Type(() => pokemon_move_method_proseCreateWithoutLanguagesInput)
    create?: Array<pokemon_move_method_proseCreateWithoutLanguagesInput>;

    @Field(() => [pokemon_move_method_proseCreateOrConnectWithoutLanguagesInput], {nullable:true})
    @Type(() => pokemon_move_method_proseCreateOrConnectWithoutLanguagesInput)
    connectOrCreate?: Array<pokemon_move_method_proseCreateOrConnectWithoutLanguagesInput>;

    @Field(() => [pokemon_move_method_proseWhereUniqueInput], {nullable:true})
    @Type(() => pokemon_move_method_proseWhereUniqueInput)
    connect?: Array<pokemon_move_method_proseWhereUniqueInput>;
}
