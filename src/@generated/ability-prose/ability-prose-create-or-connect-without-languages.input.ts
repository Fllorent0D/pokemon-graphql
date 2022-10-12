import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ability_proseWhereUniqueInput } from './ability-prose-where-unique.input';
import { Type } from 'class-transformer';
import { ability_proseCreateWithoutLanguagesInput } from './ability-prose-create-without-languages.input';

@InputType()
export class ability_proseCreateOrConnectWithoutLanguagesInput {

    @Field(() => ability_proseWhereUniqueInput, {nullable:false})
    @Type(() => ability_proseWhereUniqueInput)
    where!: ability_proseWhereUniqueInput;

    @Field(() => ability_proseCreateWithoutLanguagesInput, {nullable:false})
    @Type(() => ability_proseCreateWithoutLanguagesInput)
    create!: ability_proseCreateWithoutLanguagesInput;
}
