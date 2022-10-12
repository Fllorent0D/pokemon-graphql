import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesWhereUniqueInput } from './languages-where-unique.input';
import { Type } from 'class-transformer';
import { languagesCreateWithoutPokedex_proseInput } from './languages-create-without-pokedex-prose.input';

@InputType()
export class languagesCreateOrConnectWithoutPokedex_proseInput {

    @Field(() => languagesWhereUniqueInput, {nullable:false})
    @Type(() => languagesWhereUniqueInput)
    where!: languagesWhereUniqueInput;

    @Field(() => languagesCreateWithoutPokedex_proseInput, {nullable:false})
    @Type(() => languagesCreateWithoutPokedex_proseInput)
    create!: languagesCreateWithoutPokedex_proseInput;
}
