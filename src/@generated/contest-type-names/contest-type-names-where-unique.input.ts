import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { contest_type_namesContest_type_idLocal_language_idCompoundUniqueInput } from './contest-type-names-contest-type-id-local-language-id-compound-unique.input';

@InputType()
export class contest_type_namesWhereUniqueInput {

    @Field(() => contest_type_namesContest_type_idLocal_language_idCompoundUniqueInput, {nullable:true})
    contest_type_id_local_language_id?: contest_type_namesContest_type_idLocal_language_idCompoundUniqueInput;
}
