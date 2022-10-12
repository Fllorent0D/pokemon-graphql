import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { berry_firmness_namesWhereUniqueInput } from './berry-firmness-names-where-unique.input';
import { Type } from 'class-transformer';
import { berry_firmness_namesCreateWithoutLanguagesInput } from './berry-firmness-names-create-without-languages.input';

@InputType()
export class berry_firmness_namesCreateOrConnectWithoutLanguagesInput {

    @Field(() => berry_firmness_namesWhereUniqueInput, {nullable:false})
    @Type(() => berry_firmness_namesWhereUniqueInput)
    where!: berry_firmness_namesWhereUniqueInput;

    @Field(() => berry_firmness_namesCreateWithoutLanguagesInput, {nullable:false})
    @Type(() => berry_firmness_namesCreateWithoutLanguagesInput)
    create!: berry_firmness_namesCreateWithoutLanguagesInput;
}
