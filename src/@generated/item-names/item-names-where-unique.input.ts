import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { item_namesItem_idLocal_language_idCompoundUniqueInput } from './item-names-item-id-local-language-id-compound-unique.input';

@InputType()
export class item_namesWhereUniqueInput {

    @Field(() => item_namesItem_idLocal_language_idCompoundUniqueInput, {nullable:true})
    item_id_local_language_id?: item_namesItem_idLocal_language_idCompoundUniqueInput;
}
