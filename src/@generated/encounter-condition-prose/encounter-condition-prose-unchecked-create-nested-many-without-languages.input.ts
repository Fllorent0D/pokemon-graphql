import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { encounter_condition_proseCreateWithoutLanguagesInput } from './encounter-condition-prose-create-without-languages.input';
import { Type } from 'class-transformer';
import { encounter_condition_proseCreateOrConnectWithoutLanguagesInput } from './encounter-condition-prose-create-or-connect-without-languages.input';
import { encounter_condition_proseWhereUniqueInput } from './encounter-condition-prose-where-unique.input';

@InputType()
export class encounter_condition_proseUncheckedCreateNestedManyWithoutLanguagesInput {

    @Field(() => [encounter_condition_proseCreateWithoutLanguagesInput], {nullable:true})
    @Type(() => encounter_condition_proseCreateWithoutLanguagesInput)
    create?: Array<encounter_condition_proseCreateWithoutLanguagesInput>;

    @Field(() => [encounter_condition_proseCreateOrConnectWithoutLanguagesInput], {nullable:true})
    @Type(() => encounter_condition_proseCreateOrConnectWithoutLanguagesInput)
    connectOrCreate?: Array<encounter_condition_proseCreateOrConnectWithoutLanguagesInput>;

    @Field(() => [encounter_condition_proseWhereUniqueInput], {nullable:true})
    @Type(() => encounter_condition_proseWhereUniqueInput)
    connect?: Array<encounter_condition_proseWhereUniqueInput>;
}
