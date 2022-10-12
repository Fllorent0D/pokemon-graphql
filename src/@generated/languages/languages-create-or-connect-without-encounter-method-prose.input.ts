import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesWhereUniqueInput } from './languages-where-unique.input';
import { Type } from 'class-transformer';
import { languagesCreateWithoutEncounter_method_proseInput } from './languages-create-without-encounter-method-prose.input';

@InputType()
export class languagesCreateOrConnectWithoutEncounter_method_proseInput {

    @Field(() => languagesWhereUniqueInput, {nullable:false})
    @Type(() => languagesWhereUniqueInput)
    where!: languagesWhereUniqueInput;

    @Field(() => languagesCreateWithoutEncounter_method_proseInput, {nullable:false})
    @Type(() => languagesCreateWithoutEncounter_method_proseInput)
    create!: languagesCreateWithoutEncounter_method_proseInput;
}
