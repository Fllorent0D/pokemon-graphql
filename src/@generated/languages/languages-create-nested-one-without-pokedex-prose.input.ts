import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesCreateWithoutPokedex_proseInput } from './languages-create-without-pokedex-prose.input';
import { Type } from 'class-transformer';
import { languagesCreateOrConnectWithoutPokedex_proseInput } from './languages-create-or-connect-without-pokedex-prose.input';
import { languagesWhereUniqueInput } from './languages-where-unique.input';

@InputType()
export class languagesCreateNestedOneWithoutPokedex_proseInput {

    @Field(() => languagesCreateWithoutPokedex_proseInput, {nullable:true})
    @Type(() => languagesCreateWithoutPokedex_proseInput)
    create?: languagesCreateWithoutPokedex_proseInput;

    @Field(() => languagesCreateOrConnectWithoutPokedex_proseInput, {nullable:true})
    @Type(() => languagesCreateOrConnectWithoutPokedex_proseInput)
    connectOrCreate?: languagesCreateOrConnectWithoutPokedex_proseInput;

    @Field(() => languagesWhereUniqueInput, {nullable:true})
    @Type(() => languagesWhereUniqueInput)
    connect?: languagesWhereUniqueInput;
}
