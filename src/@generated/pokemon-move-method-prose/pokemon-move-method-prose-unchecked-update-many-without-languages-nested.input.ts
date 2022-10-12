import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_move_method_proseCreateWithoutLanguagesInput } from './pokemon-move-method-prose-create-without-languages.input';
import { Type } from 'class-transformer';
import { pokemon_move_method_proseCreateOrConnectWithoutLanguagesInput } from './pokemon-move-method-prose-create-or-connect-without-languages.input';
import { pokemon_move_method_proseUpsertWithWhereUniqueWithoutLanguagesInput } from './pokemon-move-method-prose-upsert-with-where-unique-without-languages.input';
import { pokemon_move_method_proseWhereUniqueInput } from './pokemon-move-method-prose-where-unique.input';
import { pokemon_move_method_proseUpdateWithWhereUniqueWithoutLanguagesInput } from './pokemon-move-method-prose-update-with-where-unique-without-languages.input';
import { pokemon_move_method_proseUpdateManyWithWhereWithoutLanguagesInput } from './pokemon-move-method-prose-update-many-with-where-without-languages.input';
import { pokemon_move_method_proseScalarWhereInput } from './pokemon-move-method-prose-scalar-where.input';

@InputType()
export class pokemon_move_method_proseUncheckedUpdateManyWithoutLanguagesNestedInput {

    @Field(() => [pokemon_move_method_proseCreateWithoutLanguagesInput], {nullable:true})
    @Type(() => pokemon_move_method_proseCreateWithoutLanguagesInput)
    create?: Array<pokemon_move_method_proseCreateWithoutLanguagesInput>;

    @Field(() => [pokemon_move_method_proseCreateOrConnectWithoutLanguagesInput], {nullable:true})
    @Type(() => pokemon_move_method_proseCreateOrConnectWithoutLanguagesInput)
    connectOrCreate?: Array<pokemon_move_method_proseCreateOrConnectWithoutLanguagesInput>;

    @Field(() => [pokemon_move_method_proseUpsertWithWhereUniqueWithoutLanguagesInput], {nullable:true})
    @Type(() => pokemon_move_method_proseUpsertWithWhereUniqueWithoutLanguagesInput)
    upsert?: Array<pokemon_move_method_proseUpsertWithWhereUniqueWithoutLanguagesInput>;

    @Field(() => [pokemon_move_method_proseWhereUniqueInput], {nullable:true})
    @Type(() => pokemon_move_method_proseWhereUniqueInput)
    set?: Array<pokemon_move_method_proseWhereUniqueInput>;

    @Field(() => [pokemon_move_method_proseWhereUniqueInput], {nullable:true})
    @Type(() => pokemon_move_method_proseWhereUniqueInput)
    disconnect?: Array<pokemon_move_method_proseWhereUniqueInput>;

    @Field(() => [pokemon_move_method_proseWhereUniqueInput], {nullable:true})
    @Type(() => pokemon_move_method_proseWhereUniqueInput)
    delete?: Array<pokemon_move_method_proseWhereUniqueInput>;

    @Field(() => [pokemon_move_method_proseWhereUniqueInput], {nullable:true})
    @Type(() => pokemon_move_method_proseWhereUniqueInput)
    connect?: Array<pokemon_move_method_proseWhereUniqueInput>;

    @Field(() => [pokemon_move_method_proseUpdateWithWhereUniqueWithoutLanguagesInput], {nullable:true})
    @Type(() => pokemon_move_method_proseUpdateWithWhereUniqueWithoutLanguagesInput)
    update?: Array<pokemon_move_method_proseUpdateWithWhereUniqueWithoutLanguagesInput>;

    @Field(() => [pokemon_move_method_proseUpdateManyWithWhereWithoutLanguagesInput], {nullable:true})
    @Type(() => pokemon_move_method_proseUpdateManyWithWhereWithoutLanguagesInput)
    updateMany?: Array<pokemon_move_method_proseUpdateManyWithWhereWithoutLanguagesInput>;

    @Field(() => [pokemon_move_method_proseScalarWhereInput], {nullable:true})
    @Type(() => pokemon_move_method_proseScalarWhereInput)
    deleteMany?: Array<pokemon_move_method_proseScalarWhereInput>;
}
