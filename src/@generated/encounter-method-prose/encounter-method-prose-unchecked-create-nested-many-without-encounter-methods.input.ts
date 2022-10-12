import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { encounter_method_proseCreateWithoutEncounter_methodsInput } from './encounter-method-prose-create-without-encounter-methods.input';
import { Type } from 'class-transformer';
import { encounter_method_proseCreateOrConnectWithoutEncounter_methodsInput } from './encounter-method-prose-create-or-connect-without-encounter-methods.input';
import { encounter_method_proseWhereUniqueInput } from './encounter-method-prose-where-unique.input';

@InputType()
export class encounter_method_proseUncheckedCreateNestedManyWithoutEncounter_methodsInput {

    @Field(() => [encounter_method_proseCreateWithoutEncounter_methodsInput], {nullable:true})
    @Type(() => encounter_method_proseCreateWithoutEncounter_methodsInput)
    create?: Array<encounter_method_proseCreateWithoutEncounter_methodsInput>;

    @Field(() => [encounter_method_proseCreateOrConnectWithoutEncounter_methodsInput], {nullable:true})
    @Type(() => encounter_method_proseCreateOrConnectWithoutEncounter_methodsInput)
    connectOrCreate?: Array<encounter_method_proseCreateOrConnectWithoutEncounter_methodsInput>;

    @Field(() => [encounter_method_proseWhereUniqueInput], {nullable:true})
    @Type(() => encounter_method_proseWhereUniqueInput)
    connect?: Array<encounter_method_proseWhereUniqueInput>;
}
