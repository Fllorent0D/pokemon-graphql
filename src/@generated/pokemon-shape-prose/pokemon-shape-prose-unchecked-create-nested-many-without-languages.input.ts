import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_shape_proseCreateWithoutLanguagesInput } from './pokemon-shape-prose-create-without-languages.input';
import { Type } from 'class-transformer';
import { pokemon_shape_proseCreateOrConnectWithoutLanguagesInput } from './pokemon-shape-prose-create-or-connect-without-languages.input';
import { pokemon_shape_proseWhereUniqueInput } from './pokemon-shape-prose-where-unique.input';

@InputType()
export class pokemon_shape_proseUncheckedCreateNestedManyWithoutLanguagesInput {

    @Field(() => [pokemon_shape_proseCreateWithoutLanguagesInput], {nullable:true})
    @Type(() => pokemon_shape_proseCreateWithoutLanguagesInput)
    create?: Array<pokemon_shape_proseCreateWithoutLanguagesInput>;

    @Field(() => [pokemon_shape_proseCreateOrConnectWithoutLanguagesInput], {nullable:true})
    @Type(() => pokemon_shape_proseCreateOrConnectWithoutLanguagesInput)
    connectOrCreate?: Array<pokemon_shape_proseCreateOrConnectWithoutLanguagesInput>;

    @Field(() => [pokemon_shape_proseWhereUniqueInput], {nullable:true})
    @Type(() => pokemon_shape_proseWhereUniqueInput)
    connect?: Array<pokemon_shape_proseWhereUniqueInput>;
}
