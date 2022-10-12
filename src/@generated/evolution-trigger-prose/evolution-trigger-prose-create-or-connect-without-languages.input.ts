import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { evolution_trigger_proseWhereUniqueInput } from './evolution-trigger-prose-where-unique.input';
import { Type } from 'class-transformer';
import { evolution_trigger_proseCreateWithoutLanguagesInput } from './evolution-trigger-prose-create-without-languages.input';

@InputType()
export class evolution_trigger_proseCreateOrConnectWithoutLanguagesInput {

    @Field(() => evolution_trigger_proseWhereUniqueInput, {nullable:false})
    @Type(() => evolution_trigger_proseWhereUniqueInput)
    where!: evolution_trigger_proseWhereUniqueInput;

    @Field(() => evolution_trigger_proseCreateWithoutLanguagesInput, {nullable:false})
    @Type(() => evolution_trigger_proseCreateWithoutLanguagesInput)
    create!: evolution_trigger_proseCreateWithoutLanguagesInput;
}
