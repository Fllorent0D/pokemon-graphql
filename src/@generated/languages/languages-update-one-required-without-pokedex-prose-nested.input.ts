import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesCreateWithoutPokedex_proseInput } from './languages-create-without-pokedex-prose.input';
import { Type } from 'class-transformer';
import { languagesCreateOrConnectWithoutPokedex_proseInput } from './languages-create-or-connect-without-pokedex-prose.input';
import { languagesUpsertWithoutPokedex_proseInput } from './languages-upsert-without-pokedex-prose.input';
import { languagesWhereUniqueInput } from './languages-where-unique.input';
import { languagesUpdateWithoutPokedex_proseInput } from './languages-update-without-pokedex-prose.input';

@InputType()
export class languagesUpdateOneRequiredWithoutPokedex_proseNestedInput {

    @Field(() => languagesCreateWithoutPokedex_proseInput, {nullable:true})
    @Type(() => languagesCreateWithoutPokedex_proseInput)
    create?: languagesCreateWithoutPokedex_proseInput;

    @Field(() => languagesCreateOrConnectWithoutPokedex_proseInput, {nullable:true})
    @Type(() => languagesCreateOrConnectWithoutPokedex_proseInput)
    connectOrCreate?: languagesCreateOrConnectWithoutPokedex_proseInput;

    @Field(() => languagesUpsertWithoutPokedex_proseInput, {nullable:true})
    @Type(() => languagesUpsertWithoutPokedex_proseInput)
    upsert?: languagesUpsertWithoutPokedex_proseInput;

    @Field(() => languagesWhereUniqueInput, {nullable:true})
    @Type(() => languagesWhereUniqueInput)
    connect?: languagesWhereUniqueInput;

    @Field(() => languagesUpdateWithoutPokedex_proseInput, {nullable:true})
    @Type(() => languagesUpdateWithoutPokedex_proseInput)
    update?: languagesUpdateWithoutPokedex_proseInput;
}
